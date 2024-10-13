import { getAllJobs } from "@/api/jobs";
import { JobList } from "@/components/site/JobList";
import { Slider } from "@/components/site/home/Slider";
import { Footer } from "@/components/site/layout/Footer";

export default async function Page() {

	const jobs = await getAllJobs();
	const activeJobs = jobs.filter(job => job.status === 'Active');
	
	const latestJobs = activeJobs
		.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime())
		.slice(0, 8);

	return (
		
		<div className="flex flex-col w-full">

			<div className="flex w-full justify-center items-center gap-8 bg-zinc-900">
				<div className="flex flex-col p-8 gap-8">
					<h1 className="text-2xl md:text-4xl">WorkNest</h1>
					<h1 className="text-3xl md:text-5xl max-w-[320px]">Descubra mais de <strong>1000 vagas</strong></h1>
					<p className="text-base md:text-lg max-w-[400px]">Uma excelente plataforma para quem busca crescer na carreira e tem paixão por startups.</p>
				</div>
				<img src="/bg.png" className="hidden lg:block lg:max-w-2xl 2xl:max-w-5xl"/>
			</div>

			<section className="w-ful flex items-center flex-col gap-8">

				<div className="w-full items-center flex flex-col justify-center gap-6">

					<Slider/>

					<div className="max-w-5xl w-full items-center flex flex-col justify-center gap-6">

						<JobList
							label="Vagas em destaque"
							cardInitialOrientation="vertical"
							jobs={activeJobs}
						/>

					</div>

				</div>

				<div className="bg-muted w-full flex items-center justify-center p-8">
					<div className="max-w-5xl w-full">
						<JobList
							label="Últimas Vagas Abertas"
							cardInitialOrientation="horizontal"
							jobs={latestJobs}
						/>
					</div>
				</div>
				
			</section>

			<Footer/>

		</div>

	);

}