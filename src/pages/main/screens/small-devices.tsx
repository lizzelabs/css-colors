import { Media, Piece, Scrollable, WithStyle } from '@lizzelabs/react-harmony';
import {
  BaseInput,
  Color,
  Dots,
  IconButton,
  Section,
  Select,
  Slider,
  Wheel,
} from '@/components';
import { Modes } from '../main.static';
import { Close, Down, Left, Settings, Up } from '@/icons';
import { Theme } from '@/theme';
import { Signature } from '@/components/signature';
import { useCallback, useMemo } from 'react';
import { useMain } from '../main.hook';

export const SmallDevices = () => {
  const {
    state,
    onModeChange,
    onDarknessChange,
    wheelContainer,
    wheelSection,
    colorsSection,
    settingsSection,
    computed,
    onEmitWheelOutput,
    onSelectedPickerChange,
    onPickersMove,
    onChangeWheelOutputAccent,
    onChangeWheelOutputApplyOn,
    onChangeWheelOutputColor,
    onChangeWheelOutputColorKind,
    onSelectWheelOutput,
    onPickerNumberChange,
    onSpaceBetweenEachPickerChange,
    onVisibleWheelColorChange,
    goTo,
  } = useMain();
  const query = useCallback((theme: Theme) => theme.media.smallDevices, []);
  const background = useCallback(
    (theme: Theme) => ({ background: theme.color.raw }),
    [],
  );
  const color = useCallback((theme: Theme) => theme.color.raw, []);
  const highlight = useCallback((theme: Theme) => theme.highlight.raw, []);
  const gradient = useMemo(
    () => [
      'rgba(0, 0, 0, 0.4)',
      'rgba(51, 51, 51, 0.4)',
      'rgba(102, 102, 102, 0.4)',
      'rgba(153, 153, 153, 0.4)',
      'rgba(204, 204, 204, 0.4)',
      'rgba(255, 255, 255, 0.4)',
    ],
    [],
  );

  const iconButtonContainerStyles = useMemo(
    () =>
      ({
        flex: '1 0 auto',
        justifyContent: 'center',
        alignItems: 'start',
      }) satisfies WithStyle,
    [],
  );

  return (
    <Media
      query={query}
      withStyle={background}
      removeFromHtml
    >
      <Scrollable
        as='article'
        vertical
        scrollSnap='y mandatory'
        behavior='instant'
        highlight={highlight}
        primary={color}
        touchAction='none'
      >
        <Section>
          <Scrollable
            horizontal
            scrollSnap='x mandatory'
            behavior='instant'
            highlight={highlight}
            primary={color}
            touchAction='none'
          >
            <Section
              ref={wheelSection}
              contentRows='55px 50px calc(100% - 155px) 50px'
            >
              <Piece atRow={1}>
                <Select
                  options={Modes}
                  value={state.mode}
                  onChange={onModeChange as any}
                  directionals
                ></Select>
                <IconButton
                  size={24}
                  onClick={goTo(settingsSection)}
                >
                  {state.activeView === 'wheel' ? <Settings /> : <Close />}
                </IconButton>
              </Piece>
              <Piece
                atRow={2}
                direction='column'
                padding='10px'
              >
                <Slider
                  direction='horizontal'
                  min={0.1}
                  max={1}
                  step={0.1}
                  value={state.darkness}
                  onChange={onDarknessChange}
                  colors={gradient}
                  deg={90}
                  label='Darkness'
                ></Slider>
              </Piece>
              <Piece
                ref={wheelContainer}
                atRow={3}
              >
                <Wheel
                  pickers={state.pickers}
                  computed={computed}
                  darkness={state.darkness}
                  selectedIndex={state.selectedPickerIndex}
                  selectedPicker={state.selectedPickerId}
                  distanceBetweenEachPicker={state.distanceBetweenEachPicker}
                  onChange={onEmitWheelOutput}
                  onSelectedPickerChange={onSelectedPickerChange}
                  onPickersMove={onPickersMove}
                  freeMove={state.mode.value.freeMove}
                ></Wheel>
              </Piece>
              <Piece
                atRow={4}
                withStyle={iconButtonContainerStyles}
              >
                <IconButton
                  size={24}
                  round
                  onClick={goTo(colorsSection)}
                >
                  <Down />
                </IconButton>
              </Piece>
            </Section>
            <Section
              ref={settingsSection}
              contentRows='60px 100px 100px'
            >
              <IconButton
                size={24}
                round
                onClick={goTo(wheelSection)}
                flex='0 0 28px'
                margin='10px'
              >
                <Left />
              </IconButton>
              <Piece
                flex='1 1 100%'
                justifyContent='center'
                alignItems='center'
                direction='column'
              >
                <BaseInput
                  type='number'
                  label='Pickers'
                  value={state.numberOfPickers}
                  onChange={onPickerNumberChange as any}
                  disableLeftRadius
                  disableRightRadius
                  flex='1 0 auto'
                  atRow={2}
                  width='90%'
                  justifySelf='center'
                />
                <BaseInput
                  type='number'
                  label='Space between each one'
                  value={state.distanceBetweenEachPicker}
                  onChange={onSpaceBetweenEachPickerChange as any}
                  disableLeftRadius
                  disableRightRadius
                  flex='1 0 auto'
                  width='90%'
                  justifySelf='center'
                  atRow={3}
                />
              </Piece>
            </Section>
          </Scrollable>
        </Section>
        <Section
          ref={colorsSection}
          contentRows='50px 1fr 50px 35px'
        >
          <Piece
            atRow={1}
            withStyle={iconButtonContainerStyles}
          >
            <IconButton
              size={24}
              round
              onClick={goTo(wheelSection)}
            >
              <Up />
            </IconButton>
          </Piece>
          <Scrollable
            atRow={2}
            horizontal
            scrollSnap='x mandatory'
            behavior='instant'
            highlight={(theme: Theme) => theme.highlight.raw}
            primary={(theme: Theme) => theme.color.raw}
            gap='20px'
            padding='0 15px'
          >
            {state.themes.map((theme, index) => (
              <Color
                key={theme.id}
                theme={theme}
                onChangeAccent={onChangeWheelOutputAccent}
                onChangeApplyOn={onChangeWheelOutputApplyOn}
                onChangeColorKind={onChangeWheelOutputColorKind}
                onColorChange={onChangeWheelOutputColor}
                onSelect={onSelectWheelOutput}
                onVisible={onVisibleWheelColorChange(index)}
                selected={state.selectedWheelOutputId === theme.id}
              />
            ))}
          </Scrollable>
          <Dots
            atRow={3}
            total={state.themes.length}
            active={state.visibleColorIndex}
            justifyContent='center'
            alignItems='center'
          />
          <Signature atRow={4} />
        </Section>
      </Scrollable>
    </Media>
  );
};
