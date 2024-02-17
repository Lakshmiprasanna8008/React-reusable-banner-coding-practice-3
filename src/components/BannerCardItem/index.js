// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsListDetails} = props
  const {headerText, description, className} = bannerCardsListDetails
  return (
    <li className={className}>
      <div className="subContainer">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
