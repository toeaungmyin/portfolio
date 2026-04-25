import { profile } from "@/lib/data";

export type ProfileTimelineItem =
	| (typeof profile.experience)[number]
	| (typeof profile.education)[number];

/** Work first, then education — stable reference for client sections. */
const profileTimeline: ProfileTimelineItem[] = [...profile.experience, ...profile.education];

export function getProfileTimeline(): readonly ProfileTimelineItem[] {
	return profileTimeline;
}
