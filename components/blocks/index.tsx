// iKan UI Blocks - Complete block system with design tokens and layout specifications

export { TopSectionUserPersonalized } from './TopSectionUserPersonalized';
export { ResourceGridBlock } from './ResourceGridBlock';
export { AccountDetailsSection } from './AccountDetailsSection';
export { UserLoginBlock } from './UserLoginBlock';
export { MoodJournalMonthBlock } from './MoodJournalMonthBlock';

// Block Layout System
export { BlockLayout } from './BlockLayout';
export { BlockRenderer } from './BlockRenderer';

// Legacy exports for backward compatibility
export { BlockShowcase } from './BlockShowcase';

// Block configuration types
export interface BlockConfig {
  name: string;
  constraints: {
    minWidth: string;
    maxWidth: string;
  };
  layout: {
    type: 'row' | 'column' | 'grid';
    gap: string;
    align?: 'start' | 'center' | 'end';
    columns?: number;
    responsive?: {
      xs?: number;
      sm?: number;
      md?: number;
      lg?: number;
    };
  };
  items: Array<{
    component?: string;
    widget?: string;
    props?: Record<string, any>;
  }>;
  interactions: string[];
}

// Block configurations from JSON
export const blockConfigs: { [key: string]: BlockConfig } = {
  TopSectionUserPersonalized: {
    name: 'TopSectionUserPersonalized',
    constraints: {
      minWidth: 'var(--constraint-content-min)',
      maxWidth: 'var(--constraint-content-max)'
    },
    layout: {
      type: 'row',
      gap: 'var(--spacing-4)'
    },
    items: [
      { widget: 'WellbeingSnapshotWidget' },
      { widget: 'NeedsAttentionWidget' }
    ],
    interactions: []
  },
  ResourceGridBlock: {
    name: 'ResourceGridBlock',
    constraints: {
      minWidth: 'var(--constraint-content-min)',
      maxWidth: 'var(--constraint-content-max)'
    },
    layout: {
      type: 'grid',
      gap: 'var(--spacing-3)',
      columns: 12,
      responsive: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4
      }
    },
    items: [
      { component: 'ResourceCard' },
      { component: 'ResourceCard' },
      { component: 'ResourceCard' }
    ],
    interactions: ['filter', 'sort']
  },
  AccountDetailsSection: {
    name: 'AccountDetailsSection',
    constraints: {
      minWidth: 'var(--constraint-content-min)',
      maxWidth: 'var(--constraint-content-max)'
    },
    layout: {
      type: 'column',
      gap: 'var(--spacing-3)'
    },
    items: [
      { component: 'UserAvatar' },
      { component: 'TextInput', props: { label: 'Full name' } },
      { component: 'TextInput', props: { label: 'Email' } },
      { component: 'SwitchToggle', props: { label: 'Receive emails' } }
    ],
    interactions: ['edit', 'save']
  },
  UserLoginBlock: {
    name: 'UserLoginBlock',
    constraints: {
      minWidth: 'var(--constraint-input-min)',
      maxWidth: 'var(--constraint-input-max)'
    },
    layout: {
      type: 'column',
      gap: 'var(--spacing-3)',
      align: 'center'
    },
    items: [
      { component: 'TextInput', props: { placeholder: 'Email' } },
      { component: 'TextInput', props: { placeholder: 'Password', type: 'password' } },
      { component: 'ButtonPrimary', props: { label: 'Sign in', icons: { trailing: 'arrowRight' } } },
      { component: 'ButtonLink', props: { label: 'Forgot password?' } }
    ],
    interactions: ['onSubmit', 'onValidate']
  },
  MoodJournalMonthBlock: {
    name: 'MoodJournalMonthBlock',
    constraints: {
      minWidth: 'var(--constraint-content-min)',
      maxWidth: 'var(--constraint-content-max)'
    },
    layout: {
      type: 'column',
      gap: 'var(--spacing-3)'
    },
    items: [
      { widget: 'MoodJournalCalendar' },
      { component: 'MoodJournalEmojiSet' }
    ],
    interactions: ['selectDay', 'recordMood']
  }
};

// Helper functions for working with blocks
export function getBlockConfig(blockName: string): BlockConfig | undefined {
  return blockConfigs[blockName];
}

export function getBlocksByCategory(category: string): BlockConfig[] {
  // Since blocks don't have categories in the JSON, return all blocks
  return Object.values(blockConfigs);
}

export function getBlockConstraints(blockName: string): BlockConfig['constraints'] | undefined {
  const config = getBlockConfig(blockName);
  return config?.constraints;
}

export function getBlockLayout(blockName: string): BlockConfig['layout'] | undefined {
  const config = getBlockConfig(blockName);
  return config?.layout;
}