import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProdilForm from "@/app/_components/UpdateProdilForm";
import { getGuest } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  // CHANGE
  //  const countryFlag = "pt.jpg";
  //  const nationality = "portugal";

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProdilForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProdilForm>
    </div>
  );
}
