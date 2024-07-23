import { FormInputFile } from "@/components/FormInputFile";

const Page = () => {
  return (
    <main className="flex h-full max-w-screen-xl flex-col items-center justify-center">
      <form className="flex flex-col gap-4 p-4">
        <FormInputFile />
      </form>
    </main>
  );
};

export default Page;
