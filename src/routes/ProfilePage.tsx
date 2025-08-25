import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Camera, Save, Trash2, EyeOff, Eye } from 'lucide-react'

type ProfileForm = {
  name: string
  username: string
  bio: string
  skills: string
  isPublic: boolean
}

export default function ProfilePage() {
  const [avatarUrl, setAvatarUrl] = useState<string>('')
  const [coverUrl, setCoverUrl] = useState<string>('')
  const { register, handleSubmit, watch } = useForm<ProfileForm>({
    defaultValues: {
      name: 'Jane Doe',
      username: 'janedoe',
      bio: 'Product designer and creator. Building accessible experiences.',
      skills: 'Design,UX,Prototyping,Accessibility',
      isPublic: true,
    },
  })

  const onSubmit = (data: ProfileForm) => {
    console.log('Profile saved', { ...data, avatarUrl, coverUrl })
    alert('Profile saved (mock)!')
  }

  const isPublic = watch('isPublic')

  const handleImage = (file: File, setUrl: (v: string) => void) => {
    const reader = new FileReader()
    reader.onload = () => setUrl(String(reader.result))
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
        <div className="relative h-40 w-full bg-gradient-to-br from-primary-500 to-primary-900">
          {coverUrl && (
            <img src={coverUrl} alt="Cover" className="absolute inset-0 h-full w-full object-cover" />
          )}
          <label className="absolute right-3 top-3 inline-flex cursor-pointer items-center gap-2 rounded-md bg-white/20 px-3 py-1.5 text-sm text-white backdrop-blur hover:bg-white/30">
            <Camera size={16} />
            Change cover
            <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files && handleImage(e.target.files[0], setCoverUrl)} />
          </label>
        </div>
        <div className="relative px-6 pb-6 pt-14">
          <div className="absolute -top-10 left-6 h-24 w-24 overflow-hidden rounded-2xl ring-4 ring-white/60 dark:ring-slate-900/60">
            {avatarUrl ? (
              <img src={avatarUrl} className="h-full w-full object-cover" alt="Avatar" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-200/60 dark:bg-slate-800/60">
                <span className="text-slate-500">No Avatar</span>
              </div>
            )}
          </div>
          <label className="ml-32 inline-flex cursor-pointer items-center gap-2 rounded-md border border-slate-200/60 bg-white/60 px-3 py-1.5 text-sm backdrop-blur hover:bg-white/80 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-900">
            <Camera size={16} />
            Change avatar
            <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files && handleImage(e.target.files[0], setAvatarUrl)} />
          </label>
        </div>
      </div>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-xl border border-slate-200/60 bg-white/60 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-slate-500">Name</label>
                <input {...register('name')} className="mt-1 w-full rounded-md border border-slate-200/60 bg-white/80 px-3 py-2 outline-none ring-primary-500/40 focus:ring dark:border-slate-700 dark:bg-slate-900/60" />
              </div>
              <div>
                <label className="text-sm text-slate-500">Username</label>
                <input {...register('username')} className="mt-1 w-full rounded-md border border-slate-200/60 bg-white/80 px-3 py-2 outline-none ring-primary-500/40 focus:ring dark:border-slate-700 dark:bg-slate-900/60" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-500">Bio</label>
              <textarea {...register('bio')} rows={4} className="mt-1 w-full rounded-md border border-slate-200/60 bg-white/80 px-3 py-2 outline-none ring-primary-500/40 focus:ring dark:border-slate-700 dark:bg-slate-900/60" />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/60 bg-white/60 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
            <label className="text-sm text-slate-500">Skills (comma separated)</label>
            <input {...register('skills')} className="mt-1 w-full rounded-md border border-slate-200/60 bg-white/80 px-3 py-2 outline-none ring-primary-500/40 focus:ring dark:border-slate-700 dark:bg-slate-900/60" />
            <div className="mt-3 flex flex-wrap gap-2">
              {watch('skills').split(',').map((s) => s.trim()).filter(Boolean).map((skill) => (
                <span key={skill} className="rounded-full bg-primary-500/10 px-3 py-1 text-sm text-primary-600 dark:text-primary-300">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200/60 bg-white/60 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Profile Visibility</p>
                <p className="text-xs text-slate-500">{isPublic ? 'Public profile' : 'Private profile'}</p>
              </div>
              <label className="inline-flex cursor-pointer items-center gap-2">
                <input type="checkbox" {...register('isPublic')} className="peer sr-only" />
                <span className="text-slate-500 peer-checked:hidden"><EyeOff size={18} /></span>
                <span className="hidden text-primary-500 peer-checked:inline"><Eye size={18} /></span>
              </label>
            </div>
          </div>

          <div className="flex gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-white shadow hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/60">
              <Save size={16} /> Save Changes
            </button>
            <button type="button" className="inline-flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-600 hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500/40">
              <Trash2 size={16} /> Reset
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  )
}

