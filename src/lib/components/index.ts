import WButton from './WButton.vue'

// #region Window
import TitlebarIcon from './window/TitlebarIcon.vue'
import WindowBody from './window/WindowBody.vue'
import WindowButton from './window/WindowButton.vue'
import WindowComponent from './window/WindowComponent.vue'
import WindowToolbar from './window/WindowToolbar.vue'
import { type WindowControls, WindowControlIcons } from './window/Controls'
import { TitlebarIcons, type TitlebarIconName } from './window/TitlebarIcons'
// #endregion

// #region Taskbar
import StartButton from './taskbar/StartButton.vue'
import StatusBlock from './taskbar/StatusBlock.vue'
import TabComponent from './taskbar/TabComponent.vue'
import TaskbarComponent from './taskbar/TaskbarComponent.vue'
import TaskbarDivider from './taskbar/TaskbarDivider.vue'
import TaskbarGroup from './taskbar/TaskbarGroup.vue'
import TaskbarGroupheader from './taskbar/TaskbarGroupheader.vue'
// #endregion

// #region Progressbar
import ProgressbarComponent from './progress/ProgressbarComponent.vue'
// #endregion

// #region icons
import ConsolePromptIcon from './icons/ConsolePromptIcon.vue'
import LoudspeakerIcon from './icons/LoudspeakerIcon.vue'
import WindowsIcon from './icons/WindowsIcon.vue'
// #endregion

// #region Input
import WInput from './input/WInput.vue'
import WAutocomplete from './select/WAutocomplete.vue'
import { SelectIcons } from './select/Icons'
// #endregion

export {
  WButton,
  TitlebarIcon,
  WindowBody,
  WindowButton,
  WindowComponent,
  WindowToolbar,
  type WindowControls,
  WindowControlIcons,
  TitlebarIcons,
  type TitlebarIconName,
  StartButton,
  StatusBlock,
  TabComponent,
  TaskbarComponent,
  TaskbarDivider,
  TaskbarGroup,
  TaskbarGroupheader,
  ProgressbarComponent,
  ConsolePromptIcon,
  LoudspeakerIcon,
  WindowsIcon,
  WInput,
  WAutocomplete,
  SelectIcons,
}
