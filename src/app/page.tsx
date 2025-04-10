import Link from 'next/link';

const SectionLanding = () => {
  const sections = [
    { label: "Section 3", path: "/section3", title: "Creating Components in Many Ways" },
    { label: "Section 4", path: "/section4", title: "Working with build-in directives" },
    { label: "Section 5", path: "/section5", title: "Two Way Binding" },
    { label: "Section 6", path: "/section6", title: "Build In Pipe" },
    { label: "Section 7", path: "/section7", title: "Rest API Example" },
    { label: "Section 8", path: "/section8", title: "Shopping Cart Demo" },
    { label: "Section 9", path: "/section9", title: "Service Demo" },
    { label: "Section 10", path: "/section10", title: "Parent Child Component Demo" },
    { label: "Section 11", path: "/section11", title: "Custom Directives" },
    { label: "Section 12", path: "/section12", title: "Template Driven Approach Demo" },
    { label: "Section 13", path: "/section13", title: "Sub Total/Running total Demo" },
    { label: "Section 14", path: "/section14", title: "Route Parameters Demo" },
    { label: "Section 15", path: "/section15", title: "Reative Forms Approach Demo" },
    { label: "Section 16", path: "/section16", title: "Pagination Sorting Search Demo" },
    { label: "Section 17", path: "/section17", title: "Orders with Accordion Functionality Demo" },
    { label: "Section 18", path: "/section18", title: "Multi Level Accordion Demo" },
    { label: "Section 19", path: "/section19", title: "Export to File Formats Demo" },
    { label: "Section 20", path: "/section20", title: "Custom Pipes Demo" },
    { label: "Section 21", path: "/section21", title: "Cruddemo Listview Demo" },
    { label: "Section 22", path: "/section22", title: "Cookies Demo" },
    { label: "Section 23", path: "/section23", title: "Bulk Update Demo" },
    { label: "Section 24", path: "/section24", title: "Bulk Insert Demo" },
    { label: "Section 25", path: "/section25", title: "BehSub Parent/Child Demo" },
    { label: "Section 26", path: "/section26", title: "Behaviour Subject Demo" },
    { label: "Section 27", path: "/section27", title: "API Consumer Demo" },
    { label: "Section 28", path: "/section28", title: "Not Found Demo" },
  ];

  return (
    <div className="section-root p-6">
      <div className="sections-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sections.map((section) => (
          <div key={section.path} className="sections border p-4 rounded-lg shadow-md">
            <label className="text-xl font-bold">{section.label}</label>
            <Link href={section.path} className="text-blue-500 hover:underline mt-2 block">
              {section.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionLanding;
