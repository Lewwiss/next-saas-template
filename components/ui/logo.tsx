import { BoltIcon } from "@heroicons/react/20/solid";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <BoltIcon className={className} />
  );
};

export default Logo;
