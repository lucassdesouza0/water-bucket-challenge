"use client";

import { JugAction } from "@/services/waterJugSolver";
import React, { createContext, useState, useContext } from "react";

type ActionsContextType = {
	actions: JugAction[];
	setActions: React.Dispatch<React.SetStateAction<JugAction[]>>;
	jugCapacity: { jugX: number; jugY: number };
	setJugCapacity: React.Dispatch<
		React.SetStateAction<{ jugX: number; jugY: number }>
	>;
};

const ActionsContext = createContext<ActionsContextType | undefined>(undefined);

export const ActionsProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [actions, setActions] = useState<JugAction[]>([]);
	const [jugCapacity, setJugCapacity] = useState({ jugX: 0, jugY: 0 });

	return (
		<ActionsContext.Provider
			value={{ actions, setActions, jugCapacity, setJugCapacity }}
		>
			{children}
		</ActionsContext.Provider>
	);
};

export const useActionsContext = () => {
	const context = useContext(ActionsContext);
	if (context === undefined) {
		throw new Error("useActionsContext must be used within a ActionsProvider");
	}
	return context;
};
