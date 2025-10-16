import ChooseYourAvatarMobile from "./layouts/chooseYourAvatarMobile";
import ChooseYourAvatarDesktop from "./layouts/chooseYourAvatarDesktop";

function ChooseYourAvatarPage() {
  return (
    <div>
      <div className="hidden md:block">
        <ChooseYourAvatarDesktop />
      </div>
      <div className="block md:hidden">
        <ChooseYourAvatarMobile />
      </div>
    </div>
  );
}

export default ChooseYourAvatarPage;
