import { Tooltip, Button, Badge, Spinner, Grid } from '@geist-ui/core';
import type { JSX } from 'react';

export function TooltipDefault(): JSX.Element {
  return (
    <Grid.Container className="flex flex-row">
      <Grid.Container className="flex justify-center">
        <Tooltip text="The Evil Rabbit Jumped over the Fence">
          <span>Top</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip placement="bottom" text="The Evil Rabbit Jumped over the Fence">
          <span>Bottom</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip placement="left" text="The Evil Rabbit Jumped over the Fence">
          <span>Left</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip placement="right" text="The Evil Rabbit Jumped over the Fence">
          <span>Right</span>
        </Tooltip>
      </Grid.Container>
    </Grid.Container>
  );
}

export function TooltipNoDelay(): JSX.Element {
  return (
    <Grid.Container className="flex flex-row">
      <Grid.Container className="flex justify-center">
        <Tooltip enterDelay={0} leaveDelay={0} text="The Evil Rabbit Jumped over the Fence">
          <span>Top</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip
          placement="bottom"
          text="The Evil Rabbit Jumped over the Fence"
        >
          <span>Bottom</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip
          placement="left"
          text="The Evil Rabbit Jumped over the Fence"
        >
          <span>Left</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip
          placement="right"
          text="The Evil Rabbit Jumped over the Fence"
        >
          <span>Right</span>
        </Tooltip>
      </Grid.Container>
    </Grid.Container>
  );
}

export function TooltipBoxAlign(): JSX.Element {
  return (
    <>
      <Grid.Container className="flex flex-row">
        <Grid.Container className="flex justify-center">
          <Tooltip
            placement="bottom"
            text="The Evil Rabbit Jumped over the Fence"
          >
            <span>Bottom/Left</span>
          </Tooltip>
        </Grid.Container>

        <Grid.Container className="flex justify-center">
          <Tooltip
            placement="bottom"
            text="The Evil Rabbit Jumped over the Fence"
          >
            <span>Bottom/Center</span>
          </Tooltip>
        </Grid.Container>

        <Grid.Container className="flex justify-center">
          <Tooltip
            placement="bottom"
            text="The Evil Rabbit Jumped over the Fence"
          >
            <span>Bottom/Right</span>
          </Tooltip>
        </Grid.Container>
      </Grid.Container>

      <Grid.Container className="flex flex-row">
        <Grid.Container className="flex justify-center">
          <Tooltip
            placement="left"
            text="The Evil Rabbit Jumped over the Fence"
          >
            <span>Left/Left</span>
          </Tooltip>
        </Grid.Container>

        <Grid.Container className="flex justify-center">
          <Tooltip placement="left" text="The Evil Rabbit Jumped over the Fence">
            <span>Left/Center</span>
          </Tooltip>
        </Grid.Container>

        <Grid.Container className="flex justify-center">
          <Tooltip
            placement="left"
            text="The Evil Rabbit Jumped over the Fence"
          >
            <span>Left/Right</span>
          </Tooltip>
        </Grid.Container>
      </Grid.Container>

      <Grid.Container className="flex flex-row">
        <Grid.Container className="flex justify-center">
          <Tooltip
            placement="right"
            text="The Evil Rabbit Jumped over the Fence"
          >
            <span>Right/Left</span>
          </Tooltip>
        </Grid.Container>

        <Grid.Container className="flex justify-center">
          <Tooltip
            placement="right"
            text="The Evil Rabbit Jumped over the Fence"
          >
            <span>Right/Center</span>
          </Tooltip>
        </Grid.Container>

        <Grid.Container className="flex justify-center">
          <Tooltip
            placement="right"
            text="The Evil Rabbit Jumped over the Fence"
          >
            <span>Right/Right</span>
          </Tooltip>
        </Grid.Container>
      </Grid.Container>
    </>
  );
}

export function TooltipCustomContent(): JSX.Element {
  return (
    <Grid.Container className="flex flex-row">
      <Grid.Container className="flex justify-center">
        <Tooltip
          text={
            <>
              The <b>Evil Rabbit</b> Jumped over the <i>Fence</i>.
            </>
          }
        >
          <span>Top</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip
          placement="bottom"
          text={
            <>
              The <b>Evil Rabbit</b> Jumped over the <i>Fence</i>.
            </>
          }
        >
          <span>Bottom</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip
          placement="left"
          text={
            <>
              The <b>Evil Rabbit</b> Jumped over the <i>Fence</i>.
            </>
          }
        >
          <span>Left</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip
          placement="right"
          text={
            <>
              The <b>Evil Rabbit</b> Jumped over the <i>Fence</i>.
            </>
          }
        >
          <span>Right</span>
        </Tooltip>
      </Grid.Container>
    </Grid.Container>
  );
}

export function TooltipCustomType(): JSX.Element {
  return (
    <Grid.Container className="flex flex-row">
      <Grid.Container className="flex justify-center">
        <Tooltip text="The Evil Rabbit Jumped over the Fence" type="success">
          <span>Top</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip
          placement="bottom"
          text="The Evil Rabbit Jumped over the Fence"
          type="error"
        >
          <span>Bottom</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip
          placement="left"
          text="The Evil Rabbit Jumped over the Fence"
          type="warning"
        >
          <span>Left</span>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip
          placement="right"
          text="The Evil Rabbit Jumped over the Fence"
          type="secondary"
        >
          <span>Right</span>
        </Tooltip>
      </Grid.Container>
    </Grid.Container>
  );
}

export function TooltipComponents(): JSX.Element {
  return (
    <Grid.Container className="flex flex-row">
      <Grid.Container className="flex justify-center">
        <Tooltip placement="bottom" text="The Evil Rabbit Jumped over the Fence">
          <Button>Bottom</Button>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip placement="left" text="The Evil Rabbit Jumped over the Fence">
          <Badge>LEFT</Badge>
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip placement="right" text="The Evil Rabbit Jumped over the Fence">
          <Spinner />
        </Tooltip>
      </Grid.Container>
    </Grid.Container>
  );
}

export function TooltipOther(): JSX.Element {
  return (
    <Grid.Container className="flex flex-row">
      <Grid.Container className="flex justify-center">
        <Tooltip text="The Evil Rabbit Jumped over the Fence">
          No tip indicator
        </Tooltip>
      </Grid.Container>

      <Grid.Container className="flex justify-center">
        <Tooltip
          text="The Evil Rabbit Jumped over the Fence multiple times."
        >
          No center text
        </Tooltip>
      </Grid.Container>
    </Grid.Container>
  );
}