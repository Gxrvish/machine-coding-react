import Accordion from "./Accordion";
import data from "./data.json";

interface QnA {
    question: string;
    answer: string;
}

const Faq = () => {
    return (
        <div>
            <h1 className="heading">FAQ&apos;s</h1>
            {data.faqs.map((obj: QnA, index: number) => {
                return <Accordion qna={obj} key={index} />;
            })}
        </div>
    );
};

export default Faq;
