import CustomIcon from "components/general/custom-icon/CustomIcon";

const Operation = () => {
    return (
        <>
            <CustomIcon
                icon="ic:outline-keyboard-arrow-right"
                color="--primary-color"
                backColor="--third-color"
                size="S"
                padding="3px"
            />
            <span>start</span>
            <CustomIcon
                icon="bi:arrow-down-up"
                color="--secondary-color"
                size="S"
            />
            <span>letter i</span>
        </>
    );
};

export default Operation;
