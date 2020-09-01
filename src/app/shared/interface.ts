export interface People {
    person_id?: number,
    first_name?: string,
    last_name?: string,
    photo?: string,
    money?: string
}

export interface Progress {
    progress_id?: number,
    week?: number,
    tasks?: number,
    people_id?: number
}

export interface Hour {
    hour_id?: number,
    activity?: string,
    hours?: number,
    color?: string,
    people_id?: number
}

export interface Task {
    task_id?: number,
    status?: string,
    task?: number,
    project?: string,
    people_id?: number,
    start_date?: Date,
    end_date?: Date
}

export interface Project {
    task1?: number,
    task2?: number,
    project?: string,
    color?: string
}

export interface Statistics {
    task1?: number,
    task2?: number,
    month?: string
}