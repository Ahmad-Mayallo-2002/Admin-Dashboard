import { faqs } from "@/assets/data/questions";
import { Accordion, Heading, Span, Text } from "@chakra-ui/react";

export default function FAQS() {
  return (
    <>
      <Heading textAlign="center" mb={4} fontWeight={700} fontSize={30}>
        Frequently Asked Questions
      </Heading>
      <Text color="gray.400" textAlign="center" mb={10}>
        A lot of people don't appreciate the moment until it’s passed. I'm not
        trying my hardest, and I'm not trying to do
      </Text>
      <Accordion.Root collapsible>
        {faqs.map((faq, index) => (
          <Accordion.Item key={index} value={faq.question}>
            <Accordion.ItemTrigger>
              <Span flex="1">{faq.question}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{faq.answer}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
}
