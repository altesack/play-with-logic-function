interface IconProps {
  name: string
}

export const Icon = ({ name }: IconProps): JSX.Element => {
  return <i className={`bi-${name}`}/>
}
