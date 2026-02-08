import React from "react";
import { Card } from "../ui/card";
import type { Activity } from "../../types/Activity";
import "../../styles/activity.css";

interface ActivityCardProps {
  activity: Activity;
  className?: string;
}

/**
 * Displays a single activity with formatted details and metrics
 */
export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, className }) => {
  const date = new Date(activity.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const hasMetrics = activity.elevation !== undefined || activity.heartRate !== undefined;

  return (
    <article className={`activity-box ${className || ""}`.trim()}>
      <Card className="p-4">
        <div className="activity-header-row">
          <div className="activity-icons" aria-hidden="true">
            <span className="activity-icon">🏃</span>
            <span className="activity-icon">⏱️</span>
          </div>
          <h3 className="activity-title">{activity.name}</h3>
          <div className="activity-pace" aria-label="Pace">{activity.pace}</div>
        </div>

        <div className="activity-details">
          <time className="activity-date" dateTime={activity.date}>
            {formattedDate}
          </time>
          {activity.distance > 0 && (
            <span className="activity-distance" aria-label="Distance">
              {activity.distance} km
            </span>
          )}
          <span className="activity-duration" aria-label="Duration">
            {activity.duration} min
          </span>
        </div>

        {activity.description && (
          <div className="activity-feedback">
            <p className="activity-comment">{activity.description}</p>
          </div>
        )}

        {hasMetrics && (
          <div className="activity-metrics">
            {activity.elevation !== undefined && (
              <span aria-label="Elevation gain">{activity.elevation}m elevation</span>
            )}
            {activity.heartRate !== undefined && (
              <span aria-label="Average heart rate">~{activity.heartRate} bpm avg</span>
            )}
          </div>
        )}
      </Card>
    </article>
  );
};