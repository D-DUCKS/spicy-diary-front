export interface Attributes {
    data_label: string;
    data_indicator_text: string;
    data_indicator_text_en: string;
    data_color: string;
}

export interface Station {
    station_id?: string;
    coordinates?: string;
    move_to?: string;
    station_name?: string;
    sub_name?: string;
    label_position?: 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';
    node_type?: 'indicator';
}