// OpenGraphCardMetaData.tsx
import { OpenSourceSystemType } from '@/types';

const OpenGraphCardMetaData = (system: OpenSourceSystemType) => {
    const title = `Searchjunct: ${system.name}`

    const description = `Systems card for the ${system.name} search system.`
    const domain = "https://searchjunct.com"
    const url = `${domain}/${system.id}`;
    const image = `${domain}/screenshots/share_cards/${system.id}.png`;

    const ogMetadata = { title, description, url, image };

    return (ogMetadata);
};

export default OpenGraphCardMetaData;
