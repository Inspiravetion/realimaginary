
// type Tag = {
//     // id: string,
//     // name: string,
//     color: `#${string}`
// }

import { Tags, tagToHSLString, type Tag } from "~/components/tags";

export function ContentFingerPrint({ tags }: { tags: Tag[] }) {
    const colorStops = tags.map(t => `${tagToHSLString(t)}, ${tagToHSLString(t)}`).join(', ');

    return <div style={{height: '4px', width: '100%', background: `linear-gradient(90deg, ${colorStops})`}}>

    </div>
}

export function TestFingerPrint() {
    return <ContentFingerPrint tags={[
        Tags.StateSponsoredViolence,
        Tags.MilitaryIndustrialComplex,
        Tags.ForeignAggression,
        Tags.PrisonIndustrialComplex,
        Tags.SurveillanceState,
        Tags.PoliceBrutality,
        Tags.SchoolToPrisonPipeline,
        Tags.DisabilityJustice,
        Tags.EnvironmentalJustice,
        Tags.LGBTQIARights
    ]}/>
}



