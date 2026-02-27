import { Media, Piece, Scrollable, WithStyle } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';
import {
  BaseInput,
  Color,
  IconButton,
  Section,
  Select,
  Slider,
  Wheel,
} from '@/components';
import { Modes } from '../main.static';
import { Close, Left, Settings } from '@/icons';
import { useCallback, useMemo } from 'react';
import { Signature } from '@/components/signature';
import { useMain } from '../main.hook';

export const OtherDevices = () => {
  const {
    wheelSection,
    state,
    onModeChange,
    settingsSection,
    goTo,
    onDarknessChange,
    wheelContainer,
    computed,
    onEmitWheelOutput,
    onSelectedPickerChange,
    onPickersMove,
    onPickerNumberChange,
    onSpaceBetweenEachPickerChange,
    onChangeWheelOutputAccent,
    onChangeWheelOutputColorKind,
    onChangeWheelOutputApplyOn,
    onChangeWheelOutputColor,
    onSelectWheelOutput,
    onVisibleWheelColorChange,
  } = useMain();

  const query = useCallback((theme: Theme) => theme.media.otherDevices, []);
  const style = useCallback(
    (theme: Theme) => ({ background: theme.color.raw }) satisfies WithStyle,
    [],
  );

  const sliderColors = useMemo(
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

  return (
    <Media
      query={query}
      withStyle={style}
      removeFromHtml
    >
      <Scrollable
        as='article'
        atRow={1}
        horizontal
        scrollSnap='x mandatory'
        behavior='instant'
        touchAction='none'
      >
        <Section
          ref={wheelSection}
          contentRows='50px 50px calc(100% - 435px) 300px 35px'
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
            kind='column'
            direction='column'
            padding='10px'
            atRow={2}
          >
            <Slider
              direction='horizontal'
              min={0.1}
              max={1}
              step={0.1}
              value={state.darkness}
              onChange={onDarknessChange}
              colors={sliderColors}
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
          <Scrollable
            atRow={4}
            horizontal
            scrollSnap='x mandatory'
            margin='0 0 10px 0'
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
          <Signature atRow={5} />
        </Section>
        <Section
          ref={settingsSection}
          contentRows='50px 1fr'
        >
          <IconButton
            size={24}
            round
            onClick={goTo(wheelSection)}
          >
            <Left />
          </IconButton>
          <Piece
            atRow={2}
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <BaseInput
              type='number'
              label='Pickers'
              value={state.numberOfPickers}
              onChange={onPickerNumberChange as any}
              disableLeftRadius
              disableRightRadius
              flex='0 0 70px'
              width='90%'
            />
            <BaseInput
              type='number'
              label='Space between each one'
              value={state.distanceBetweenEachPicker}
              onChange={onSpaceBetweenEachPickerChange as any}
              disableLeftRadius
              disableRightRadius
              flex='0 0 70px'
              width='90%'
            />
          </Piece>
        </Section>
      </Scrollable>
    </Media>
  );
};
