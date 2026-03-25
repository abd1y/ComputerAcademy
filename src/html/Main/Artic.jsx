import HomeGroups from '../Home/HomeGroups'
import GroupsArtecal from '../Group/GroupsArtecal'
import Setting from '../Setting/Setting'
import SummaryBank from '../summary_bank/SummaryBank'
export default function Artic() {
  return (
<>
<article className='articleHome'>
<HomeGroups/>
 <GroupsArtecal/>
<SummaryBank/>
 <Setting/>
</article>
</>
  )
  }
