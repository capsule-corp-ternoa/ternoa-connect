/// <reference types="react" />
import { ViewsKeyType } from "../../types";
export interface IModalHeader {
    title: string;
    currentView: ViewsKeyType;
    setCurrentView: React.Dispatch<React.SetStateAction<ViewsKeyType>>;
}
