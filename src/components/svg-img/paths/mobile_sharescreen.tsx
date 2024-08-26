import React from 'react';

import { PathOptions } from '../svg-dict';

export const path = ({ applicationNum }: PathOptions) => {

    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 11.1327C5 9.30058 6.32245 7.7363 8.13776 7.48883C10.2842 7.19622 13.0781 6.875 15 6.875C16.9219 6.875 19.7158 7.19622 21.8622 7.48883C23.6776 7.7363 25 9.30059 25 11.1327V18.9813C25 20.7626 23.7474 22.2962 21.9845 22.5518C20.0471 22.8327 17.4442 23.125 15 23.125C12.5558 23.125 9.95287 22.8327 8.0155 22.5518C6.25264 22.2962 5 20.7626 5 18.9813V11.1327ZM14.5558 15.625C14.1243 15.625 13.7745 15.2752 13.7745 14.8438V14.0168C13.7745 13.7292 13.5413 13.496 13.2537 13.496H12.1835C11.8497 13.496 11.6887 13.0871 11.9328 12.8595L14.4986 10.4674C14.781 10.2041 15.219 10.2041 15.5014 10.4674L18.0672 12.8595C18.3113 13.0871 18.1503 13.496 17.8165 13.496H16.7463C16.4587 13.496 16.2255 13.7292 16.2255 14.0168V14.8438C16.2255 15.2752 15.8757 15.625 15.4442 15.625H14.5558ZM14.5312 16.25C14.0998 16.25 13.75 16.5998 13.75 17.0313V17.9688C13.75 18.4002 14.0998 18.75 14.5312 18.75H15.4688C15.9002 18.75 16.25 18.4002 16.25 17.9688V17.0313C16.25 16.5998 15.9002 16.25 15.4688 16.25H14.5312Z" fill="#FEFEFE"/>
        </svg>
    )
}

export const viewBox = '0 0 30 30';