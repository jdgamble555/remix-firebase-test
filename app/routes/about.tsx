
export default function AboutPage() {

    const about = {
        name: 'test name',
        description: 'supper'
    };

    return (
        <div className="flex items-center justify-center my-5">
            <div className="border w-[400px] p-5 flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">{about.name}</h1>
                <p>{about.description}</p>
            </div>
        </div>
    );
}