import { Platform } from 'obsidian';

export function getSubmitShortcutLabel(): string {
  return Platform.isMacOS ? 'Cmd+Enter' : 'Ctrl+Enter';
}

export function isSubmitShortcut(event: KeyboardEvent): boolean {
  const hasSubmitModifier = event.metaKey !== event.ctrlKey;

  return (
    (
      event.key === 'Enter' ||
      event.code === 'Enter' ||
      event.code === 'NumpadEnter' ||
      event.keyCode === 13
    ) &&
    !event.altKey &&
    !event.shiftKey &&
    hasSubmitModifier
  );
}
