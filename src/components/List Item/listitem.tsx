import React from "react";
import {
  ListItemContainer,
  ListItemTextContainer,
  Title,
  Description,
  StatusCircleContainer,
  StatusCircle,
} from "./styles.listitem";
import { Task } from "./interfaces.listitem";

export default function ListItem({ task }: Task): JSX.Element {
  const { title, description } = task;
  return (
    <ListItemContainer>
      <StatusCircleContainer>
        <StatusCircle />
      </StatusCircleContainer>
      <ListItemTextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ListItemTextContainer>
    </ListItemContainer>
  );
}
