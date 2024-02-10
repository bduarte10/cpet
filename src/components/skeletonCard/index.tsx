import { Skeleton } from '../ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[165px] w-[230px] rounded-xl bg-slate-200" />
      <div className="space-y-4 pt-4">
        <Skeleton className="h-4 w-[210px] bg-slate-200" />
        <Skeleton className="h-4 w-[190px] bg-slate-200" />
        <Skeleton className="h-10 w-[230px] bg-slate-200" />
      </div>
    </div>
  );
}
