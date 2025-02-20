import React from 'react';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import { centerColumn } from '@teambit/base-ui.layout.page-frame';
import WorkspacePost from './workspace-post.mdx';
import WorkspacePre from './workspace-pre.mdx';

export type CreateWorkspaceProps = {
  defaultWorkspaceName: string;

  defaultScopeName: string;

  workspaceTemplateName: string;

  aspect?: string;
};

export function CreateWorkspace({
  defaultScopeName,
  defaultWorkspaceName,
  workspaceTemplateName,
  aspect,
}: CreateWorkspaceProps) {
  const bitNew = `bit new ${workspaceTemplateName} ${defaultWorkspaceName} --default-scope ${defaultScopeName} ${
    aspect ? `--aspect ${aspect}` : ''
  }`;
  const changeDir = `cd ${defaultWorkspaceName}`;
  return (
    <>
      <WorkspacePre />
      <CodeSnippet className={centerColumn} language="bash">
        {bitNew}
      </CodeSnippet>
      <br />
      <CodeSnippet className={centerColumn} language="bash">
        {changeDir}
      </CodeSnippet>
      <br />
      <WorkspacePost />
    </>
  );
}
