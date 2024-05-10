interface BadgeProps {
  text?: string;
}

export default function Badge({text}: BadgeProps) {

  function getVariant(text?: string) {
    if (text === 'POSITIVE') {
      return 'badge success';
    } else if (text === 'NEGATIVE') {
      return 'badge error';
    } else if (text === 'NEUTRAL') {
      return 'badge';
    } else {
      return '';
    }
  }

  return <span {...{theme: `${getVariant(text)}`}}>{text}</span>
};