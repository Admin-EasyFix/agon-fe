import type { FC } from "react";
import type { Activity } from "../types/Activity";
import "../styles/activity.css";
import { ActivityCard } from "./ui/activityCard";

interface ActivityListCardProps {
  activities: Activity[];
}

export const ActivityListCard: FC<ActivityListCardProps> = ({ activities }) => (
  <section className="activity-list-card" aria-label="Activity list">
    <h2 className="activity-header">Activities ({activities.length})</h2>
    {activities.length === 0 ? (
      <div className="text-center text-muted-foreground py-8">
        No activities found.
      </div>
    ) : (
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id}>
            <ActivityCard activity={activity} />
          </li>
        ))}
      </ul>
    )}
  </section>
);