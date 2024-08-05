import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AccordianImg } from './icon'

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="w-full">
            <button
                className="w-full text-left p-4 flex justify-between items-center mt-6 shadow-accordian rounded-lg font-jakarata"
                onClick={onClick}
            >
                <span className="text-lg font-medium font-jakarata">{title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <AccordianImg />
                </span>
            </button>
            {isOpen && (
                <div className="p-4 bg-white">
                    {content}
                </div>
            )}
        </div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full mx-auto bg-white rounded-lg max-w-[992px]">
            {items.length > 0 ? (
                items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onClick={() => handleClick(index)}
                    />
                ))
            ) : (
                <div className="p-4 text-gray-700">No items available</div>
            )}
        </div>
    );
};

Accordion.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// Default props to avoid undefined errors
Accordion.defaultProps = {
    items: [],
};


// Usage Example
const accordionItems = [
    {
        title: 'Lörem ipsum koda astrobel: sutaveligen.',
        content: 'Content for the first accordion item.',
    },
    {
        title: 'Rodod bänera viliga',
        content: 'Content for the second accordion item.',
    },
    {
        title: 'Pregigt primasofi dede facebooka: förutom',
        content: 'Content for the third accordion item.',
    }, {
        title: 'Ipsum koda astrobel: sutaveligen. Rodod bänera viliga.',
        content: 'Content for the fourth accordion item.',
    },
    {
        title: 'Rodod bänera viliga. Pregigt primasofi dede facebooka',
        content: 'Content for the fifth accordion item.',
    },
];

const App = () => (
    <Accordion items={accordionItems} />
);

export default App;
