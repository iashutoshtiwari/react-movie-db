import { BADGE_LABEL } from "../../utils/strings"
import "./badge.css"

/**********************************************
 *Name: Badge
 *Description: Show the badge on the movie tile
 **********************************************/

const Badge: React.FC = () => {
  return <span className="badge">{BADGE_LABEL}</span>
}

export default Badge
