const WorkExperienceCard = ({ workDetails }: any) => {
  return (
    <>
      {workDetails?.map(
        (data: {
          company: string;
          company_link: string;
          role: string;
          starting_month: string;
          ending_month: string;
          short_description: string;
          details: {
            value: string;
          }[];
          learnings: string;
        }) => {
          return (
            <div key={data.company} className="w-full min-h-[50vh] mt-10">
              <div>
                <div className="w-full border rounded-3xl"></div>
                <div className="w-full mt-4 ">
                  <h2 className="font-semibold text-2xl">
                    {data?.company} <span>link</span>
                  </h2>
                  <h4 className="font-sm text-neutral-600 space-y-reverse mt-1 dark:text-neutral-400">
                    {data?.role} | {data.starting_month} - {data.ending_month}
                  </h4>
                </div>
                <div className="w-full min-h-10  ">
                  <div className="mt-5">
                    <span>{data.short_description}:</span>
                  </div>
                  <div className="mt-4 w-full min-h-10">
                    <ul className="space-y-2 leading-relaxed list-disc list-inside">
                      {data.details.map((d: { value: string }, i: number) => {
                        return <li key={i}>{d.value}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="mt-5">
                    <span>{data.learnings}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default WorkExperienceCard;
