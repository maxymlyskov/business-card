export default function BottomHeader() {
  return (
    <div className="bottom-header-block">
      <div className="bottom-header-block-optional">
        <img src={require("../icons/twitter.jpg")} alt="twitter" />
        <img src={require("../icons/facebook.jpg")} alt="facebook" />
        <img src={require("../icons/instagram.jpg")} alt="instagram" />
        <img src={require("../icons/github.jpg")} alt="github" />
      </div>
    </div>
  );
}
