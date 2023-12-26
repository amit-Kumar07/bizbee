import { RxAvatar } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";
import { GoOrganization } from "react-icons/go";
import { CiBank } from "react-icons/ci";
import { TiVendorAndroid } from "react-icons/ti";
import Clients from "../../components/page/Clients";
import Services from "../../components/page/Services";
export const DASHBOARD_SIDEBAR_LINKS = [
    {
		key: 'clients',
		label: 'Clients',
		path: '/',
		icon: <RxAvatar/>,
		content:<Clients/>
	},
    {
		key: 'services',
		label: 'Services Master',
		path: '/services',
		icon: <GoOrganization />,
		content:<Services/>
	},
    {
		key: 'finance',
		label: 'Finance',
		path: '/finance',
		icon: <CiBank/>
	},
    {
		key: 'vendor',
		label: 'Vendor Management',
		path: '/vendor',
		icon: <TiVendorAndroid/>
	},
    {
		key: 'reminder',
		label: 'Reminder',
		path: '/reminder',
		icon: <AiOutlineEye/>
	}
]