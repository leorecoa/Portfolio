import { describe, expect, it } from 'vitest';
import { PROJECTS } from '../lib/constants';

describe('project data', () => {
  it('provides complete content and GitHub links for every project', () => {
    expect(PROJECTS).not.toHaveLength(0);

    for (const project of PROJECTS) {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.link).toMatch(/^https:\/\/github\.com\/leorecoa\//);
    }
  });
});
