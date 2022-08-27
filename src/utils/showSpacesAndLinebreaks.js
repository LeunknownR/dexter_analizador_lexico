export const showSpacesAndLinebreaks = (expression) => {
    return expression?.replaceAll("\n", "\\n").replaceAll(" ", "\\w");
};
