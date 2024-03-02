import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const DynamicAccordion = ({ data }: any) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="bg-slate-100/70 p-4 rounded-md">
      {data?.map((item: any, index: any) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className="p-4 border-b last:border-b-0">
          <AccordionTrigger className="text-left font-semibold">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="pt-3">
            <ul className="list-disc list-inside">
              {item?.contents.map((content: any, subIndex: any) => (
                <li key={subIndex}>{content}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default DynamicAccordion
