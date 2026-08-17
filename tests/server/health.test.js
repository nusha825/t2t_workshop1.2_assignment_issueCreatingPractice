import { test } from 'node:test';
import assert from 'node:assert/strict';
import { healthStatus } from '../../src/server/src/health.js';

test('returns ok health status', () => {
  assert.deepEqual(healthStatus(), { status: 'ok' });
});