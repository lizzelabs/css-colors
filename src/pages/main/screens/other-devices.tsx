import { Media, Piece, Scrollable, WithStyle } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';
import {
  Color,
  IconButton,
  Section,
  Select,
  Selectable,
  Slider,
  Wheel,
} from '@/components';
import { Modes } from '../main.static';
import { Close, Revert, Settings } from '@/icons';
import { useCallback, useMemo } from 'react';
import { Signature } from '@/components/signature';
import { useMain } from '../main.hook';
import { SettingsScreen } from './settings-screen';

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
    selectedTheme,
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
    onSelectPallete,
    onChangeThemeTitle,
    onDeleteTheme,
  } = useMain();

  const query = useCallback((theme: Theme) => theme.media.otherDevices, []);
  const style = useCallback(
    (theme: Theme) =>
      ({ background: theme.getCurrentPallete().color.raw }) satisfies WithStyle,
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
          contentRows='30px 50px 50px 30px calc(100% - 545px) 350px 35px'
        >
          <Piece atRow={1}>
            <Selectable
              label='Primary Pallete'
              text={selectedTheme.text?.raw}
              color={selectedTheme.color?.raw}
              highlight={selectedTheme.highlight?.raw}
              active={state.pallete === 'primary'}
              onClick={onSelectPallete('primary')}
            />
            <Selectable
              label='Light Pallete'
              text={selectedTheme.lightScreenText?.raw}
              color={selectedTheme.lightScreen?.raw}
              highlight={selectedTheme.lightGrey?.raw}
              active={state.pallete === 'light'}
              onClick={onSelectPallete('light')}
            ></Selectable>
            <Selectable
              label='Dark Pallete'
              text={selectedTheme.darkScreenText?.raw}
              color={selectedTheme.darkScreen?.raw}
              highlight={selectedTheme.darkGrey?.raw}
              active={state.pallete === 'dark'}
              onClick={onSelectPallete('dark')}
            ></Selectable>
          </Piece>
          <Piece
            atRow={2}
            borderBottom={(theme: Theme) => `1px solid ${theme.highlight.raw}`}
          >
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
            atRow={3}
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
            atRow={4}
            padding='10px'
          >
            <Piece justifyContent='start'></Piece>
            <Piece
              alignItems='center'
              justifyContent='end'
            >
              <IconButton
                size={20}
                round={false}
              >
                <Revert />
              </IconButton>
            </Piece>
          </Piece>
          <Piece
            ref={wheelContainer}
            atRow={5}
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
            atRow={6}
            horizontal
            scrollSnap='x mandatory'
            gap='20px'
            padding='10px'
            scrollMode='auto'
          >
            {state.clipboard && (
              <Color
                key='clipboard'
                theme={state.clipboard}
                onChangeAccent={() => {}}
                onChangeApplyOn={() => {}}
                onChangeColorKind={() => {}}
                onColorChange={() => {}}
                onSelect={() => {}}
                onVisible={() => {}}
              />
            )}
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
                onChangeTitle={onChangeThemeTitle}
                onDelete={onDeleteTheme}
                selected={state.selectedWheelOutputId === theme.id}
              />
            ))}
          </Scrollable>
          <Signature atRow={7} />
        </Section>
        <SettingsScreen
          settingsSection={settingsSection}
          wheelSection={wheelSection}
          goTo={goTo}
          state={state}
          onSpaceBetweenEachPickerChange={onSpaceBetweenEachPickerChange}
          onPickerNumberChange={onPickerNumberChange}
        />
      </Scrollable>
    </Media>
  );
};
