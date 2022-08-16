import CustomIcon from "components/general/custom-icon/CustomIcon";

const OperationType = ({tokenKey}) => {
    return (
        <>
            <CustomIcon
                icon="bi:arrow-right"
                color="--secondary-back-color"
                backColor="--black-xd"
                size="S"
            />
            <h6>{tokenKey}</h6>
        </>
    );
};

export default OperationType;
