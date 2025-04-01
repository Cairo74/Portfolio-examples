interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="p-4 border rounded-lg bg-card hover:shadow-md transition-all">
      <h3 className="font-medium mb-2">{name}</h3>
      <div className="w-full bg-muted rounded-full h-2.5">
        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
      <p className="text-sm text-right mt-1 text-muted-foreground">{level}%</p>
    </div>
  )
}

