import TrashIcon from "@/icons/Trash";
import ArrowLeftIcon from "@/icons/ArrowLeft";
import ArrowRightIcon from "@/icons/ArrowRight";
import BeakerIcon from "@/icons/Beaker";
import { ActionKey } from "@/constants/actions";

interface JugIconProps extends Omit<React.HTMLProps<HTMLDivElement>, "action"> {
	action: ActionKey;
	isXJug?: boolean;
}

type IconType = {
	[key in ActionKey]: JSX.Element | false;
};

export default function JugIcon({
	action,
	isXJug = false,
	...props
}: JugIconProps) {
	const icons: IconType = {
		EMPTY_JUG_X: isXJug && <TrashIcon {...props} />,
		EMPTY_JUG_Y: !isXJug && <TrashIcon {...props} />,
		FILL_JUG_X: isXJug && <BeakerIcon {...props} />,
		FILL_JUG_Y: !isXJug && <BeakerIcon {...props} />,
		TRANSFER_JUG_X_TO_Y: isXJug && <ArrowRightIcon {...props} />,
		TRANSFER_JUG_Y_TO_X: !isXJug && <ArrowLeftIcon {...props} />,
	};
	return <> {icons[action]} </>;
}
