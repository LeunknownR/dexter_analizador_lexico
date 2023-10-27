import { Container } from "./styles";

import documentation from "core/utils/documentation";
import LexicalCategory from "./lexical-category/LexicalCategory";

const LexicalComponents = () => {
	return (
		<Container>
			{documentation?.map(({ subtitle, words, components }, idx) => (
				<LexicalCategory
					key={idx}
					subtitle={subtitle}
					words={words}
					components={components}
				/>
			))}
		</Container>
	);
};

export default LexicalComponents;
