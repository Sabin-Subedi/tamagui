import { Button, Input, SizeTokens, TextArea, XStack, YStack } from 'tamagui'

export function InputsDemo() {
  return (
    <YStack width={200} mih={250} overflow="hidden" space="$2" margin="$3" padding="$2">
      <InputDemo size="$2" />
      <InputDemo size="$3" />
      <InputDemo size="$4" />
      <TextArea minHeight={140} placeholder="Enter your details..." numberOfLines={4} />
    </YStack>
  )
}

function InputDemo(props: { size: SizeTokens }) {
  return (
    <XStack alignItems="center" space="$2">
      <Input flex={1} size={props.size} placeholder={`Size ${props.size}...`} />
      <Button size={props.size}>Go</Button>
    </XStack>
  )
}