interface ISectionWrapperProps {
  title: string;
  children: any;
  id: string;
}

const SectionWrapper = ({ title, children, id }: ISectionWrapperProps) => {
  return (
    <section className='pt-20 md:pt-32' id={id}>
      <h2 className='text-3xl xl:text-5xl text-primary font-semibold text-center pb-6 xl:pb-12 '>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
