import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import InputText from './InputText';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <p class="h1 text-dark">Test</p>
      <InputText name="TestLabel" label="Test Label" required="true" />
    </div>
  );
};

export default App;
