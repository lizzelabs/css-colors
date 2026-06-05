import { BaseInput, IconButton, Section } from '@/components';
import { Left } from '@/icons';
import { Piece } from '@lizzelabs/react-harmony';
import { RefObject } from 'react';
import { MainPageState } from '../../main.types';

export interface SettingsScreenProperties {
  settingsSection: RefObject<HTMLElement>;
  wheelSection: RefObject<HTMLElement>;
  goTo: (page: RefObject<HTMLElement>) => () => void;
  state: MainPageState;
  onSpaceBetweenEachPickerChange: (value: string | number) => void;
  onPickerNumberChange: (value: string | number) => void;
}

export const SettingsScreen = ({
  settingsSection,
  wheelSection,
  goTo,
  state,
  onSpaceBetweenEachPickerChange,
  onPickerNumberChange,
}: SettingsScreenProperties) => {
  return (
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
  );
};
