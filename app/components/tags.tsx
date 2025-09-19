export type Hue = [0, 30, 60, 90, 120, 150, 180, 210, 240, 300, 330][number];
export type Lightness = [35, 50, 65][number]

export type Tag = {
    id: TagType,
    name: string,
    hue: Hue,
    lightness: Lightness
}

export enum TagType {
    StateSponsoredViolence = 'StateSponsoredViolence',
    MilitaryIndustrialComplex = 'MilitaryIndustrialComplex',
    ForeignAggression = 'ForeignAggression',

    PrisonIndustrialComplex = 'PrisonIndustrialComplex',
    SurveillanceState = 'SurveillanceState',
    PoliceBrutality = 'PoliceBrutality',

    SchoolToPrisonPipeline = 'SchoolToPrisonPipeline',

    DisabilityJustice = 'DisabilityJustice',

    EnvironmentalJustice = 'EnvironmentalJustice',

    LGBTQIARights = 'LGBTQIARights',
}

export const Tags: { [type in TagType]: Tag} = {
    [TagType.StateSponsoredViolence]: {
        id: TagType.StateSponsoredViolence,
        name: 'State Sponsored Violence',
        hue: 0,
        lightness: 35
    },
    [TagType.MilitaryIndustrialComplex]: {
        id: TagType.MilitaryIndustrialComplex,
        name: 'Military Industrial Complex',
        hue: 0,
        lightness: 50
    },
    [TagType.ForeignAggression]: {
        id: TagType.ForeignAggression,
        name: 'Foreign Aggression',
        hue: 0,
        lightness: 65
    },

    [TagType.PrisonIndustrialComplex]: {
        id: TagType.PrisonIndustrialComplex,
        name: 'Prison Industrial Complex',
        hue: 30,
        lightness: 35
    },
    [TagType.SurveillanceState]: {
        id: TagType.SurveillanceState,
        name: 'Surveillance State',
        hue: 30,
        lightness: 50
    },
    [TagType.PoliceBrutality]: {
        id: TagType.PoliceBrutality,
        name: 'Police Brutality',
        hue: 30,
        lightness: 65
    },

    [TagType.SchoolToPrisonPipeline]: {
        id: TagType.SchoolToPrisonPipeline,
        name: 'School To Prison Pipeline',
        hue: 60,
        lightness: 35
    },

    [TagType.DisabilityJustice]: {
        id: TagType.DisabilityJustice,
        name: 'Disability Justice',
        hue: 90,
        lightness: 35
    },

    [TagType.EnvironmentalJustice]: {
        id: TagType.EnvironmentalJustice,
        name: 'Environmental Justice',
        hue: 120,
        lightness: 35
    },

    [TagType.LGBTQIARights]: {
        id: TagType.LGBTQIARights,
        name: 'LGBTQIA+ Rights',
        hue: 150,
        lightness: 35
    },
}

export function tagToHSLString(tag: Tag) {
    return `hsl(${tag.hue} 100% ${tag.lightness}%)`
}

export function tagToAccentHSLString(tag: Tag) {
    const lightness = tag.lightness >= 50
        ? tag.lightness - 20
        : tag.lightness + 20;

    return `hsl(${tag.hue} 100% ${lightness}%)`
}

export function TagPill({ type }: { type: TagType }) {
    const tag = Tags[type];
    const primaryColor = tagToHSLString(tag);
    const accentColor = tagToAccentHSLString(tag);

    return <div style={{
        backgroundColor: 'white',
        borderColor: primaryColor,
        borderWidth: 1,
        borderRadius: 16,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        width: 'fit-content',
        margin: 4
    }}>
        <span style={{ color: primaryColor }}>{tag.name}</span>
    </div>
}

export function TestTagPills() {
    return [
        TagType.StateSponsoredViolence,
        TagType.MilitaryIndustrialComplex,
        TagType.ForeignAggression,
        TagType.PrisonIndustrialComplex,
        TagType.SurveillanceState,
        TagType.PoliceBrutality,
        TagType.SchoolToPrisonPipeline,
        TagType.DisabilityJustice,
        TagType.EnvironmentalJustice,
        TagType.LGBTQIARights
    ].map(t => <TagPill type={t} />)
}