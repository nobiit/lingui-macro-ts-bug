import { Trans } from '@lingui/macro';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import * as React from 'react';

export function Example() {
  return (
    <h1>
      <Trans>Hello</Trans>
    </h1>
  );
}

export default function App() {
  return (
    <I18nProvider i18n={i18n}>
      <Example />
    </I18nProvider>
  );
}
