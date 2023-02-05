import { Wrapper } from "./styles"

export const Button = (props) => {
  return (
    <Wrapper 
      onClick={props.onClick}
      color={props.color} 
      bg={props.bg}
      w={props.w} 
      h={props.h} 
      fs={props.fs}
      fw={props.fw}
      display={props.display}
    >
      {props.value}
    </Wrapper>
  )
}
